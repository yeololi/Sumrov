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

// CreateToken은 주어진 사용자 ID에 대한 JWT 토큰을 생성합니다.
func CreateToken(userId string) (string, error) {
	var err error

	err = godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	secretKey := os.Getenv("SecretToken")

	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["user_id"] = userId
	atClaims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)

	token, err := at.SignedString([]byte(secretKey))
	if err != nil {
		return "", err
	}
	return token, nil
}

// MailSignUp은 새 사용자를 등록하고 데이터베이스에 저장합니다.
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

// MailLogin은 사용자의 로그인을 처리하고 JWT 토큰을 반환합니다.
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
			"message": "ID is not found",
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

	token, err := CreateToken(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}
0