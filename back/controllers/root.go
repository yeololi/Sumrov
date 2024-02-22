package controllers

import (
	"back/repository"
	"back/services"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func NewController(port string) {
	r := gin.New()

	r.Use(gin.Logger())
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost", "http://127.0.0.1", "http://112.159.30.237"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		MaxAge:       24 * time.Hour,
	}))

	// Access Control Middleware
	r.Use(func(c *gin.Context) {
		// 내 서버에 접근하는지 확인
		requestIP := c.ClientIP()
		// 허용된 IP 리스트
		allowedIPs := []string{"127.0.0.1", "::1", "localhost", "112.159.30.237"}
		isAllowed := false
		for _, ip := range allowedIPs {
			if requestIP == ip {
				isAllowed = true
				break
			}
		}
		if !isAllowed {
			c.JSON(http.StatusForbidden, gin.H{"error": "접근이 거부되었습니다."})
			c.Abort()
			return
		}
		c.Next()
	})

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
