package services

import (
	"back/entity"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
	"net/http"
	"time"
)

func CreateSale(c *gin.Context, rdb *gorm.DB) {
	var feed *entity.SaleDTO

	location, err := time.LoadLocation("Asia/Seoul")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "KST 타임존을 설정하는 중 오류가 발생했습니다.",
		})
		return
	}

	// 현재 KST 시간을 문자열로 변환
	currentTime := time.Now().In(location).Format("2006-01-02 15:04:05")

	err = c.ShouldBindJSON(&feed)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// 새로운 Sale 구조체 생성
	sale := &entity.Sale{
		Uuid:         uuid.New().String(),
		CustomerName: feed.CustomerName,
		PostNum:      feed.PostNum,
		Addr:         feed.Addr,
		Phone:        feed.Phone, // KST
		Product:      feed.Product,
		Price:        feed.Price,
		Amount:       feed.Amount,
		Status:       "입금 대기",
		Date:         currentTime,
	}

	// GORM을 사용하여 판매 정보를 데이터베이스에 삽입
	if err := rdb.Create(sale).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "판매 정보를 데이터베이스에 삽입하는 중 오류가 발생했습니다.",
		})
		return
	}

	// 성공 응답 반환
	c.JSON(http.StatusCreated, gin.H{
		"message": "판매 정보가 성공적으로 생성되었습니다.",
		"sale":    sale,
	})
}

func GetAllSale(c *gin.Context, db *gorm.DB) {
	var sale []entity.Sale

	db.Find(&sale)

	c.JSON(http.StatusOK, gin.H{
		"results": sale,
	})
}

func GetSaleById(c *gin.Context, db *gorm.DB) {
	puid := c.Param("uuid")
	var sale entity.Sale

	// UUID에 해당하는 판매 정보만 선택
	db.Where("uuid = ?", puid).First(&sale)

	c.JSON(http.StatusOK, gin.H{
		"results": sale,
	})
}

func UpdateSale(c *gin.Context, db *gorm.DB) {
	puid := c.Param("uuid")
	var sale entity.Sale
	var status struct {
		PostNum string `json:"PostNum"`
		Status  string `json:"status"`
	}

	// 요청 바디에서 상태 정보를 바인딩
	if err := c.ShouldBindJSON(&status); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// UUID에 해당하는 판매 정보 조회
	if err := db.Where("uuid = ?", puid).First(&sale).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "해당하는 판매 정보를 찾을 수 없습니다.",
		})
		return
	}

	// 판매 정보의 상태를 업데이트
	sale.Status = status.Status
	sale.PostNum = status.PostNum
	if err := db.Save(&sale).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "판매 정보를 업데이트하는 중 오류가 발생했습니다.",
		})
		return
	}

	// 성공 응답 반환
	c.JSON(http.StatusOK, gin.H{
		"message": "판매 정보가 성공적으로 업데이트되었습니다.",
		"sale":    sale,
	})
}

func DeleteSale(c *gin.Context, db *gorm.DB) {
	puid := c.Param("uuid")
	var sale entity.Sale

	// UUID에 해당하는 판매 정보 조회
	if err := db.Where("uuid = ?", puid).First(&sale).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "해당하는 판매 정보를 찾을 수 없습니다.",
		})
		return
	}

	// 판매 정보 삭제
	if err := db.Delete(&sale).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "판매 정보를 삭제하는 중 오류가 발생했습니다.",
		})
		return
	}

	// 성공 응답 반환
	c.JSON(http.StatusOK, gin.H{
		"message": "판매 정보가 성공적으로 삭제되었습니다.",
	})
}

func GetSaleStatus(c *gin.Context, db *gorm.DB) {
	var sale []entity.Sale
	var status struct {
		Status string `json:"status"`
	}

	// 요청 바디에서 상태 정보를 바인딩
	if err := c.ShouldBindJSON(&status); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// UUID에 해당하는 판매 정보 조회
	if err := db.Where("status = ?", status.Status).Find(&sale).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "해당하는 판매 정보를 찾을 수 없습니다.",
		})
		return
	}

	// 성공 응답 반환
	c.JSON(http.StatusOK, gin.H{
		"sale": sale,
	})
}
