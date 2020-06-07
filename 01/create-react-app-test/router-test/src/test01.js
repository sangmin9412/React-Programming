import React from 'react';
import './test01.scss';

const dataList = [
    {
        name: '보험료',
        price: 160000
    },
    {
        name: '적금',
        price: 380000
    },
    {
        name: '용돈',
        price: 200000
    },
    {
        name: '핸드폰',
        price: 120000
    },
    {
        name: '식비',
        price: 300000
    },
    {
        name: '교통비',
        price: 50000
    },
    {
        name: '머리',
        price: 40000
    },
    {
        name: '눈썹',
        price: 30000
    },
    {
        name: '화장품',
        price: 30000
    }
];

console.log(dataList);
let costArr = [];
for (let i = 0; i < dataList.length; i++) {
    costArr[i] = 0;
}
const inputKeyUpHandler = (e, price) => {
    const index = e.target.dataset.index;
    let count = e.target.value ? e.target.value : 0;
    if(isNaN(parseInt(e.target.value))) {
        e.target.value = null;
        count = 0;
    };

    price *= count;
    costArr[index] = price;
    // console.log(count);
    // console.log(index);
    // console.log(costArr);
    // console.log(costArr[index]);
}

const costHandler = (e) => {
    let cost = 0;
    for (let i = 0; i < costArr.length; i++) {
        cost += costArr[i];
    }
    e.currentTarget.innerHTML = cost;
}

function test01 () {
    return (
        <div>
            <h2>테스트</h2>
            <div className="test01">
                <div className="test01_head">
                    <div className="test01_row">
                        {
                            dataList.map((data, index) => {
                                return <p className="test01_col" key={index}>{data.name}</p>
                            })
                        }
                        <p className="test01_col">합계</p>
                        {/* <p className="test01_col">보험료</p>
                        <p className="test01_col">적금</p>
                        <p className="test01_col">용돈</p>
                        <p className="test01_col">핸드폰</p>
                        <p className="test01_col">식비</p>
                        <p className="test01_col">교통비</p>
                        <p className="test01_col">머리</p>
                        <p className="test01_col">눈썹</p>
                        <p className="test01_col">화장품</p>
                        <p className="test01_col">합계</p> */}
                    </div>
                </div>
                <div className="test01_body">
                    <div className="test01_row">
                        {
                            dataList.map((data, index) => {
                                return <p className="test01_col" key={index} ><input type="text" data-index={index} onKeyUp={(e) => inputKeyUpHandler(e, data.price)} placeholder="" /></p>
                            })
                        }
                        {/* <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        <p className="test01_col"><input type="text" placeholder="숫자를 입력 하세요." /></p>
                        */}
                        <p className="test01_col">
                            <button onClick={costHandler}>Click!</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default test01;