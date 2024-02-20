package services

import (
	"back/entities"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"net/http"
	"os"
	"time"
)

func CreateToken(userId string) (string, error) {
	var err error

	err = godotenv.Load()
	if err != nil {
		panic("Error loading.env file")
	}

	secretKey := os.Getenv("SecretToken") // 이 키는 보안을 위해 안전하게 보관해야 합니다.

	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["user_id"] = userId
	atClaims["exp"] = time.Now().Add(time.Hour * 24).Unix() // 토큰 유효 시간은 24시간으로 설정했습니다. 필요에 따라 변경하세요.
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)

	token, err := at.SignedString([]byte(secretKey))
	if err != nil {
		return "", err
	}
	return token, nil
}

func MailSignUp(db *gorm.DB, c *gin.Context) {
	var userDTO entities.MailUserDTO

	err := c.ShouldBindJSON(&userDTO)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid user input",
		})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userDTO.Pw), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Could not hash password",
		})
		return
	}

	user := entities.User{
		ID:     userDTO.Id,
		Name:   userDTO.Name,
		Email:  userDTO.Email,
		Pw:     string(hashedPassword),
		Adress: userDTO.Adress,
		Phone:  userDTO.Phone,
	}

	err = db.AutoMigrate(&entities.User{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = db.Create(&user).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Could not create user",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}

func MailLogin(db *gorm.DB, c *gin.Context) {
	var loginInfo entities.MailUserDTO
	var user entities.User

	err := c.ShouldBindJSON(&loginInfo)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid user input",
		})
		return
	}

	if err := db.Where("id = ?", loginInfo.Id).First(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "id is not found",
		})
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Pw), []byte(loginInfo.Pw))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"message": "Incorrect password",
		})
		return
	}

	token, err := CreateToken(loginInfo.Id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}
