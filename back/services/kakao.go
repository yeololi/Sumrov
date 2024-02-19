package services

import (
	"back/entities"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"io/ioutil"
	"net/http"
)

type accessToken struct {
	AccessToken string `json:"accessToken"`
}

func GetKakaoUserInfo(accessToken string) (*entities.KakaoLoginUserDTO, error) {
	req, err := http.NewRequest("GET", "https://kapi.kakao.com/v2/user/me", nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", "Bearer "+accessToken)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var userInfo entities.KakaoLoginUserDTO
	err = json.Unmarshal(body, &userInfo)
	if err != nil {
		return nil, err
	}

	return &userInfo, nil
}

func KakaoAuth(db *gorm.DB, c *gin.Context) {

}
