package entity

type SaleDTO struct {
	CustomerName string `json:"customer_name"` // 구매자 이름
	PostNum      string `json:"post_num"`
	Product      string `json:"product"` // 송장번호
	Addr         string `json:"addr"`    //주소
	Phone        string `json:"phone"`   //전화번호
	Price        string `json:"price"`   //가격
	Amount       string `json:"amount"`  //수량
	Status       string `json:"status"`  //배송 상태
}

type Sale struct {
	Uuid         string `gorm:"primaryKey"` //uuid
	CustomerName string // 구매자 이름
	Product      string // 제품 uuid
	PostNum      string // 송장번호
	Addr         string //주소
	Phone        string //전화번호
	Price        string //가격
	Amount       string //수량
	Status       string //배송 상태
	Date         string //주문 일자
}
