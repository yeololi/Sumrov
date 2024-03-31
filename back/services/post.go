package services

import (
	"back/entity"
	"context"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"net/http"
	"time"
)

func CreatePost(c *gin.Context, db *mongo.Client) {
	var feed *entity.PostDTO

	err := c.ShouldBindJSON(&feed)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	upload := &entity.Post{
		Uuid:         uuid.New().String(),
		Title:        feed.Title,
		Price:        feed.Price,
		Sale:         feed.Sale,
		Description:  feed.Description,
		Category:     feed.Category,
		Size:         feed.Size,
		Color:        feed.Color,
		MainImage:    feed.MainImage,
		DetailImages: feed.DetailImages,
	}

	collection := db.Database("sumrov").Collection("feed")

	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	result, err := collection.InsertOne(ctx, upload)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"result": result,
	})
}

func GetAllPost(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cur, err := collection.Find(ctx, bson.D{})
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entity.Post
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func GetPostById(c *gin.Context, db *mongo.Client) {
	category := c.Param("category")

	// MongoDB 컬렉션 선택
	collection := db.Database("sumrov").Collection("feed")

	// 컨텍스트 생성
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 카테고리에 대한 필터 생성
	filter := bson.D{{"category", category}}

	// 컬렉션에서 데이터 가져오기
	cur, err := collection.Find(ctx, filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cur.Close(ctx)

	// 결과를 담을 슬라이스 선언
	var results []entity.Post

	// 결과를 슬라이스에 저장
	if err := cur.All(ctx, &results); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// 결과를 JSON으로 응답
	c.JSON(http.StatusOK, gin.H{"results": results})
}

func DeletePost(c *gin.Context, db *mongo.Client) {
	uuid := c.Param("uuid")

	// MongoDB 컬렉션 선택
	collection := db.Database("sumrov").Collection("feed")

	// 컨텍스트 생성
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// uuid에 대한 필터 생성
	filter := bson.D{{"uuid", uuid}}

	// 단일 문서 삭제
	_, err := collection.DeleteOne(ctx, filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// 삭제가 성공했음을 클라이언트에게 응답
	c.JSON(http.StatusOK, gin.H{"message": "Post deleted successfully"})
}

func PatchPost(c *gin.Context, db *mongo.Client) {
	var cfeed *entity.Post
	puid := c.Param("uuid")
	err := c.ShouldBindJSON(&cfeed)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	collection := db.Database("sumrov").Collection("feed")

	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	filter := bson.D{{"uuid", puid}}

	update := bson.D{
		{"$set", cfeed}, // Assuming you want to update all fields in cfeed
	}

	result, err := collection.UpdateOne(ctx, filter, update)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"result": result,
	})
}
