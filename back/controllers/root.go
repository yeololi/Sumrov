package controllers

import (
	"back/repository"
	"back/services"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func NewController(port string) {
	r := gin.Default()

	r.Use(cors.New(
		cors.Config{
			AllowOrigins: []string{"http://192.168.219.105"},
			AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
			MaxAge:       24 * time.Hour,
		}))

	rdb := repository.MySQLInit()
	ndb := repository.MongoDBInit()

	auth := r.Group("auth")
	{
		auth.POST("/signup", func(c *gin.Context) {
			services.MailSignUp(rdb, c)
		})
		auth.POST("/mail-login", func(c *gin.Context) {
			services.MailLogin(rdb, c)
		})
	}

	feed := r.Group("feed")
	{
		feed.POST("/post", func(c *gin.Context) {
			services.FeedPost(c, ndb)
		})
		feed.GET("/all", func(c *gin.Context) {
			services.FeedAllGet(c, ndb)
		})
		feed.GET("/top", func(c *gin.Context) {
			services.FeedTopGet(c, ndb)
		})
		feed.GET("/bottom", func(c *gin.Context) {
			services.FeedBottomGet(c, ndb)
		})
		feed.GET("/acc", func(c *gin.Context) {
			services.FeedAccGet(c, ndb)
		})
		feed.DELETE("/delete/:uuid", func(c *gin.Context) {
			services.FeedDelete(c, ndb)
		})
		feed.PUT("/patch/:uuid", func(c *gin.Context) {
			services.FeedFatch(c, ndb)
		})
	}

	err := r.Run(port)
	if err != nil {
		panic(err)
	}
}
