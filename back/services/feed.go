package services

import (
	"back/entities"
	"context"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"net/http"
	"time"
)

func FeedPost(c *gin.Context, db *mongo.Client) {
	var feed *entities.FeedDTO
	var upload *entities.Feed

	err := c.ShouldBindJSON(&feed)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	upload = &entities.Feed{
		Uuid:        uuid.New().String(),
		Title:       feed.Title,
		Price:       feed.Price,
		Sale:        feed.Sale,
		Description: feed.Description,
		Category:    feed.Category,
		Size:        feed.Size,
		Color:       feed.Color,
		MainImage:   feed.MainImage,
		DetailImage: feed.DetailImage,
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

func FeedAllGet(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cur, err := collection.Find(ctx, bson.D{})
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entities.Feed
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func FeedTopGet(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.D{{"category", "top"}}
	cur, err := collection.Find(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entities.Feed
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func FeedBottomGet(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.D{{"category", "bottom"}}
	cur, err := collection.Find(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entities.Feed
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func FeedAccGet(c *gin.Context, db *mongo.Client) {
	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.D{{"category", "acc"}}
	cur, err := collection.Find(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var results []entities.Feed
	if err := cur.All(ctx, &results); err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"results": results,
	})
}

func FeedDelete(c *gin.Context, db *mongo.Client) {
	duid := c.Param("uuid")

	collection := db.Database("sumrov").Collection("feed")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.D{{"uuid", duid}}
	result, err := collection.DeleteOne(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusOK, gin.H{
		"result": result,
	})
}

func FeedFatch(c *gin.Context, db *mongo.Client) {
	var cfeed *entities.Feed
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
