import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import './home.css'
import NewCarCard from '../../Components/NewCarCard'
import carImage from '../../images/car1.png';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CarCard from '../../Components/CarCard';
import axios from 'axios'




export default function Home() {

    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(4);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCars, setTotalCars] = useState();

    localStorage.setItem("LoadCount", loadMore);





    const getData = () => {
        axios.get('https://dummyjson.com/todos')

            .then(response => {
                setIsLoading(false)
                // console.log(response.data)
                setTotalCars(response.data.limit)
                setData(response.data.todos)

            })

    }

    // const getTodoData = async () => {
    //     const url = await fetch("https://dummyjson.com/todos")
    //     setIsLoading(false)
    //     const datas = await url.json()
    //     setData(datas)
    //     // setData(datas.map((item, idx) => ({ ...item })))

    // }
    useEffect(() => {
        getData()
    }, [])


    // console.log(data.todos)
    return (
        <>
            <Header />


            <section className='container  m-auto' >
                <div class="grid  my-20 flex-auto lg:grid-cols-2 sm:grid-cols-1 gap-2 text-center  ">
                    <NewCarCard title="This is my car" carImage={carImage} context="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dignissimos?" />
                    <NewCarCard title="This is my car" carImage={carImage} context="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dignissimos?" />
                </div>

                <div className="services grid  lg:grid-cols-7   text-center gap-20 mx-20 ">
                    <div className="location_input pickUp border width-100 textinput ">
                        <div className="radio">
                            <input type="radio" checked id="radioPick" />
                            <label htmlFor="radioPick">Pick - Up</label>
                        </div>
                        <div className="pickup">

                            <div className="location" >
                                <label htmlFor="location">
                                    <h4>Location</h4>
                                    <select name="" id="location">
                                        <option value="">Select Your Location</option>
                                        <option value="">Mumbai</option>
                                        <option value="">Mumbai</option>
                                        <option value="">Mumbai</option>
                                    </select>
                                </label>

                            </div>
                            <div className="dates">
                                <h4>Date</h4>
                                <select name="" id="">
                                    <option value="">Select Your Date</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                </select>
                            </div>
                            <div className="time">
                                <h4>Time</h4>
                                <select name="" id="">
                                    <option value="">Select Your Time</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                </select>

                            </div>
                        </div>

                    </div>
                    <div className="location_input center w-20 button grid  col-span-1 gap-5 border">
                        <ImportExportIcon />
                    </div>
                    <div className="location_input pickUp border  textinput  ">
                        <div className="radio">
                            <input type="radio" checked id="radioDrop" />
                            <label htmlFor="radioDrop">Drop - Off</label>
                        </div>
                        <div className="pickup">
                            <div className="location" >
                                <label htmlFor="location">
                                    <h4>Location</h4>
                                    <select name="" id="location">
                                        <option value="">Select Your Location</option>
                                        <option value="">Mumbai</option>
                                        <option value="">Mumbai</option>
                                        <option value="">Mumbai</option>
                                    </select>
                                </label>
                            </div>
                            <div className="dates">
                                <h4>Date</h4>
                                <select name="" id="">
                                    <option value="">Select Your Date</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                </select>
                            </div>
                            <div className="time">
                                <h4>Time</h4>
                                <select name="" id="">
                                    <option value="">Select Your Time</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                    <option value="">Mumbai</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>



            </section>

            <section>
                <div className="popularCars">
                    <div className="header">
                        <h4>Popular Cars</h4>
                        <h3>View more</h3>
                    </div>
                    <div className="cars">
                        {/* <div className='loader'>{isLoading ? <p style={{ textAlign: 'center' }}>loading....</p> : <> </>}</div> */}
                        {

                            data.slice(0, totalCars).map((item) => (
                                <CarCard name={item.id} category={item.todo} carImage="https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg" prize={'$' + item.userId} status={item.completed} />
                            ))

                        }


                        {/* <CarCard name="Koenigsegg" category="Sport" carImage={carImage} prize="$99.00" status="liked" />
                        <CarCard name="Koenigsegg" category="Sport" carImage={carImage} prize="$99.00" status="liked" />
                        <CarCard name="Koenigsegg" category="Sport" carImage={carImage} prize="$99.00" status="liked" />
                        <CarCard name="Koenigsegg" category="Sport" carImage={carImage} prize="$99.00" status="liked" /> */}

                    </div>
                    <center>

                        {


                            loadMore >= totalCars ? "" : <button className='button p-5 rounded-2xl my-5' onClick={(e) => {
                                setLoadMore(loadMore + 8)
                                // localStorage.setItem("LoadCount", loadMore)
                            }}>Load More Cars</button>
                        }




                    </center>
                </div>
            </section>
        </>
    )
}
