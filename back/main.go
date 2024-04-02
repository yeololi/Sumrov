package main

import (
	"back/controllers"
	"back/repositories"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {
	r := gin.Default()

	r.Use(gin.Logger())
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		MaxAge:       24 * time.Hour,
	}))

	mongo := repositories.MongoInit()
	rdb := repositories.MySQLInit()

	controllers.NewController(mongo, r, rdb)

	r.Run(":8080")

}
