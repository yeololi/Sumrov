package entities

var KakaoAccessToken string

type KakaoLoginUserDTO struct {
	ID          int64  `json:"id"`
	ConnectedAt string `json:"connected_at"`
	ForPartner  struct {
		UUID string `json:"uuid"`
	} `json:"for_partner"`
	Properties struct {
		Nickname       string `json:"nickname"`
		ProfileImage   string `json:"profile_image"`
		ThumbnailImage string `json:"thumbnail_image"`
	} `json:"properties"`
	KakaoAccount struct {
		ProfileNeedsAgreement bool `json:"profile_needs_agreement"`
		Profile               struct {
			Nickname          string `json:"nickname"`
			ThumbnailImageURL string `json:"thumbnail_image_url"`
			ProfileImageURL   string `json:"profile_image_url"`
			IsDefaultImage    bool   `json:"is_default_image"`
		} `json:"profile"`
		HasEmail                  bool   `json:"has_email"`
		EmailNeedsAgreement       bool   `json:"email_needs_agreement"`
		IsEmailValid              bool   `json:"is_email_valid"`
		IsEmailVerified           bool   `json:"is_email_verified"`
		Email                     string `json:"email"`
		HasPhoneNumber            bool   `json:"has_phone_number"`
		PhoneNumberNeedsAgreement bool   `json:"phone_number_needs_agreement"`
		PhoneNumber               string `json:"phone_number"`
		IsKakaotalkUser           bool   `json:"is_kakaotalk_user"`
	} `json:"kakao_account"`
}

type MailUserDTO struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Email  string `json:"email"`
	Pw     string `json:"pw"`
	Adress string `json:"address"`
	Phone  string `json:"phone"`
}

type User struct {
	ID     string `gorm:"primaryKey"`
	Name   string `gorm:"duplicate key"`
	Email  string `gorm:"duplicate key"`
	Pw     string `gorm:"duplicate key"`
	Adress string `gorm:"optional key"`
	Phone  string `gorm:"duplicate key"`
}
