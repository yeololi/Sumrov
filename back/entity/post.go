package entity

type PostDTO struct {
	Title        string   `json:"title"`
	Price        string   `json:"price"`
	Sale         int      `json:"sale"`
	Description  string   `json:"description"`
	Category     string   `json:"category"`
	Size         []string `json:"size"`
	Color        []string `json:"color"`
	MainImage    string   `json:"main_image"`
	DetailImages []string `json:"detail_images"`
}

type Post struct {
	Uuid         string
	Title        string
	Price        string
	Sale         int
	Description  string
	Category     string
	Size         []string
	Color        []string
	MainImage    string
	DetailImages []string
}
