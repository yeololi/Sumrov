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

func CreateNotice(c *gin.Context, db *mongo.Client) {
	var feed *entity.NoticeDTO

	err := c.ShouldBindJSON(&feed)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// KST 타임존 설정
	location, err := time.LoadLocation("Asia/Seoul")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "KST 타임존을 설정하는 중 오류가 발생했습니다.",
		})
		return
	}

	// 현재 KST 시간을 문자열로 변환
	currentTime := time.Now().In(location).Format("2006-01-02 15:04:05")

	upload := &entity.Notice{
		Uuid:        uuid.New().String(),
		Title:       feed.Title,
		Description: feed.Description,
		Images:      feed.Images,
		Date:        currentTime, // KST 시간을 문자열로 설정
	}

	collection := db.Database("sumrov").Collection("notice")

	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	result, err := collection.InsertOne(ctx, upload)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"result": result,
	})
}

func GetAllNotice(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("notice")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cur, err := collection.Find(ctx, bson.D{})
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entity.Notice
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func GetNoticeById(c *gin.Context, db *mongo.Client) {
	puid := c.Param("uuid")

	// MongoDB 컬렉션 선택
	collection := db.Database("sumrov").Collection("notice")

	// 컨텍스트 생성
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 카테고리에 대한 필터 생성
	filter := bson.D{{"uuid", puid}}

	// 컬렉션에서 데이터 가져오기
	cur, err := collection.Find(ctx, filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cur.Close(ctx)

	// 결과를 담을 슬라이스 선언
	var results []entity.Notice

	// 결과를 슬라이스에 저장
	if err := cur.All(ctx, &results); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// 결과를 JSON으로 응답
	c.JSON(http.StatusOK, gin.H{"results": results})
}

func DeleteNotice(c *gin.Context, db *mongo.Client) {
	uuid := c.Param("uuid")

	// MongoDB 컬렉션 선택
	collection := db.Database("sumrov").Collection("notice")

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
