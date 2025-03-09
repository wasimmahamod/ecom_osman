"use client"

const Button = ({item}) => {

    let handleClick = (id) => {


        
                // POST request using fetch()
            fetch(`http://localhost:8000/api/v1/product/cart`, {
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({
                productId: id,
                userId: "673b9a729b7650570f6feab7",
            quantity:  1
            }),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
    }

  return (
    <div>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
  )
}

export default Button