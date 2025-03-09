'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Flashsalesecpart from './flashsalesecpart'
import './style.css'

function FlashSale({ time }) {

    // http://localhost:8000/api/v1/product/flashsale

    let [endTime, setEndTime] = useState(time)

    let [flashsaleProduct, setFlashsaleProduct] = useState([])


    useEffect(() => {
        function getReview() {
            axios.get(`http://localhost:8000/api/v1/product/flashsale`).then((response) => {
                console.log(response.data)
                setEndTime(response.data.time)
                setFlashsaleProduct(response.data.productId)

            })
        }
        getReview()
    }, [])


  


    const stratTime = Date.now() / 1000;
    const endTimeStamp = new Date(endTime).getTime() / 1000


    const remainingTime = endTimeStamp - stratTime
    console.log(remainingTime)

    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    const timerProps = {
        isPlaying: true,
        size: 80,
        strokeWidth: 4
    };



    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;

    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className='flash-part'>
            <div className='flash-text'>
                <div className='head-time'>
                    <h3>Flash Sale</h3>
                    <div className='count-time'>
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#7E2E84"
                            duration={daysDuration}
                            initialRemainingTime={remainingTime}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>

                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#D14081"
                            duration={daySeconds}
                            initialRemainingTime={remainingTime % daySeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("hrs", getTimeHours(daySeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>

                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#EF798A"
                            duration={hourSeconds}
                            initialRemainingTime={remainingTime % hourSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>

                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#218380"
                            duration={minuteSeconds}
                            initialRemainingTime={remainingTime % minuteSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > 0
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("sec", getTimeSeconds(elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    </div>
                </div>
                <div className='viewall'>
                    <p>View All</p>
                </div>
            </div>
            <div>
                <Flashsalesecpart flashsaleProduct={flashsaleProduct} />
            </div>
        </div>
    )
}

export default FlashSale
