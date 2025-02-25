import React, { useEffect, useState } from 'react';
import { Radio, Select, Space } from 'antd';
import axios from 'axios';


const FlashSale = () => {


    let [date, setDate] = useState("")
    let [time, setTime] = useState("")
    let [yearname, setYearname] = useState({
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "April",
        "05": "May",
        "06": "Iune",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    })

    let handleDateChange = (e) => {
        let arr = e.target.value
        let year = arr.split("-")[0]
        let month = arr.split("-")[1]
        let date = arr.split("-")[2]

        setDate(`${yearname[month]} ${date}, ${year}`)
    }

    let handleTimeChange = (e) => {
        setTime(e.target.value)
    };

    const [options, setOptions] = useState({});
    const [idlist, setIdList] = useState("");
    const [size, setSize] = useState('middle');

    const handleChange = (value) => {
        setIdList(value)
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    useEffect(() => {
        async function pro() {

            let data = await axios.get("http://localhost:8000/api/v1/product/allpro")

            let arr = [];

            data.data.map(item => {
                arr.push({
                    value: item._id,
                    label: item.name,
                })
            })

            setOptions(arr)

        }
        pro();
    }, [])

    let handleSubmit = async () => {

        axios.post('http://localhost:8000/api/v1/product/flashsale', {
            ftime: date + " " + time,
            idlist: idlist
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })


    }


    return (
        <>
            <input onChange={handleDateChange} type="date" />
            <input onChange={handleTimeChange} type="time" />
            <button onClick={handleSubmit} type='submit'>Submit</button>



            <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                //   defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{
                    width: '100%',
                }}
                options={options}
            />

        </>
    )

}

export default FlashSale
