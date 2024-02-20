package entities

type FeedDTO struct {
	Title       string `json:"title"`
	Price       int64  `json:"price"`
	Sale        int64  `json:"sale"`
	Description string `json:"description"`
	Category    string `json:"category"`
	Size        string `json:"size"`
	Color       string `json:"color"`
	MainImage   string `json:"main_image"`
	DetailImage string `json:"detail_image"`
}

type Feed struct {
	Uuid        string
	Title       string
	Price       int64
	Sale        int64
	Description string
	Category    string
	Size        string
	Color       string
	MainImage   string
	DetailImage string
}
