package controllers

import (
	"back/services"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewController(port string, mongo *mongo.Client, r *gin.Engine) {

	post := r.Group("post")
	{
		post.GET("", func(c *gin.Context) {
			services.GetAllPost(c, mongo)
		})
		post.GET("/:category", func(c *gin.Context) {
			services.GetPostById(c, mongo)
		})
		post.GET("/uuid/:uuid", func(c *gin.Context) {
			services.GetPostByUUID(c, mongo)
		})
		post.POST("", func(c *gin.Context) {
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
		notice.GET("", func(c *gin.Context) {
			services.GetAllNotice(c, mongo)
		})
		notice.GET("/:uuid", func(c *gin.Context) {
			services.GetNoticeById(c, mongo)
		})
		notice.POST("", func(c *gin.Context) {
			services.CreateNotice(c, mongo)
		})
		notice.DELETE("/:uuid", func(c *gin.Context) {
			services.DeleteNotice(c, mongo)
		})
	}
}
