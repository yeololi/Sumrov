package entity

type NoticeDTO struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Date        string   `json:"date"`
	Images      []string `json:"images"`
}

type Notice struct {
	Uuid        string
	Title       string
	Description string
	Date        string
	Images      []string
}
