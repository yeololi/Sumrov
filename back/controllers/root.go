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
			AllowOrigins: []string{"*"},
			AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
			MaxAge:       24 * time.Hour,
		}))

	db := repository.MySQLInit()

	auth := r.Group("auth")
	{
		auth.POST("/signup", func(c *gin.Context) {
			services.MailSignUp(db, c)
		})
		auth.POST("/mail-login", func(c *gin.Context) {
			services.MailLogin(db, c)
		})
	}
	r.Run(port)
}
