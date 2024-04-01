package controllers

import (
	"back/repositories"
	"back/services"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func NewController(port string) {
	r := gin.Default()

	r.Use(gin.Logger())
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		MaxAge:       24 * time.Hour,
	}))

	mongo := repositories.MongoInit()

	post := r.Group("post")
	{
		post.GET("", func(c *gin.Context) {
			services.GetAllPost(c, mongo)
		})
		post.GET("/:category", func(c *gin.Context) {
			services.GetPostById(c, mongo)
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
			services.GetAllPost(c, mongo)
		})
		notice.GET("/:uuid", func(c *gin.Context) {
			services.GetPostById(c, mongo)
		})
		notice.POST("", func(c *gin.Context) {
			services.CreatePost(c, mongo)
		})
		notice.DELETE("/:uuid", func(c *gin.Context) {
			services.DeletePost(c, mongo)
		})
	}

	err := r.Run(port)
	if err != nil {
		panic(err)
	}
}
