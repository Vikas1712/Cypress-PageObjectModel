class RoomPage{
    roomNoFieldLocator: string = 'input[id="roomNumber"]'
    roomPriceFieldLocator: string ='input[id="roomPrice"]'
    roomCreateButtonLocator: string = 'button[id="createRoom"]'
    roomDetailsLocator: string ='.detail'

    getRoomNoField = () => cy.get(this.roomNoFieldLocator)
    getPriceField =() => cy.get(this.roomPriceFieldLocator)
    clickOnCreate = () => cy.get(this.roomCreateButtonLocator).click()
    getRoomDetails =() => cy.get(this.roomDetailsLocator)

    setRoomNoField = (room_no: string) => 
     this.getRoomNoField().type(room_no)
     
    setRoomPriceField = (price: string) => 
     this.getPriceField().type(price)

    executeCreateRoom= (room_no: string,price: string) => {
    this.setRoomNoField(room_no)
    this.setRoomPriceField(price)
    cy.wait(2000);
    this.clickOnCreate()
    }

    validateRoomDetails=(expectedNumber: number)=>{
        this.getRoomDetails().its('length').should('be.greaterThan',
        expectedNumber)
    }
}
export default RoomPage