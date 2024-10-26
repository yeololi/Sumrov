package controllers

import (
	"back/services"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"gorm.io/gorm"
)

func NewController(mongo *mongo.Client, r *gin.Engine, rdb *gorm.DB) {

	post := r.Group("post")
	{
		post.GET("/", func(c *gin.Context) {
			services.GetAllPost(c, mongo)
		})
		post.GET("/:category", func(c *gin.Context) {
			services.GetPostById(c, mongo)
		})
		post.GET("/uuid/:uuid", func(c *gin.Context) {
			services.GetPostByUUID(c, mongo)
		})
		post.POST("/", func(c *gin.Context) {
			services.CreatePost(c, mongo)
		})
		post.PATCH("/:uuid", func(c *gin.Context) {
			services.PatchPost(c, mongo)
		})
		post.DELETE("/:uuid", func(c *gin.Context) {
			services.DeletePost(c, mongo)
		})
	}

	notice := r.Group("notice")
	{
		notice.GET("/", func(c *gin.Context) {
			services.GetAllNotice(c, mongo)
		})
		notice.GET("/:uuid", func(c *gin.Context) {
			services.GetNoticeById(c, mongo)
		})
		notice.POST("/", func(c *gin.Context) {
			services.CreateNotice(c, mongo)
		})
		notice.PUT("/:uuid", func(c *gin.Context) {
			services.PatchNotice(c, mongo)
		})
		notice.DELETE("/:uuid", func(c *gin.Context) {
			services.DeleteNotice(c, mongo)
		})
	}

	//r.POST("/smtp", func(c *gin.Context) {
	//	var mail *entity.Email
	//	RandomNumber := rand.Intn(900000) + 100000
	//
	//	// JSON 요청 바인딩
	//	err := c.ShouldBindJSON(&mail)
	//	if err != nil {
	//		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	//	}
	//
	//	services.MailSend(mail.Eamil, RandomNumber)
	//	c.JSON(http.StatusOK, gin.H{
	//		"임시비밀번호": RandomNumber,
	//	})
	//})

	sale := r.Group("sale")
	{
		sale.GET("/", func(c *gin.Context) {
			services.GetAllSale(c, rdb)
		})
		sale.GET("/:uuid", func(c *gin.Context) {
			services.GetSaleById(c, rdb, mongo)
		})
		sale.GET("status", func(c *gin.Context) {
			services.GetSaleStatus(c, rdb)
		})
		sale.POST("/", func(c *gin.Context) {
			services.CreateSale(c, rdb)
		})
		sale.PUT("/:uuid", func(c *gin.Context) {
			services.UpdateSale(c, rdb)
		})
		sale.DELETE("/:uuid", func(c *gin.Context) {
			services.DeleteSale(c, rdb)
		})
	}
}
