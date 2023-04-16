import TextContainer from './TextContainer'

export default function Item({ name, load, text }) {
  return (
    <div className='item'>
      <div className='item-head'>
        <div className='item-head-img'></div>
        <div className='item-head-name'>{name}</div>
        <div className='item-head-load'>{load}</div>
      </div>
      <div className='item-content'>
        <TextContainer text={text} maxChars={63} />
        <div className='item-content-link'>
          <span>
            <svg
              t='1681624854915'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/1800/svg'
              p-id='5234'
              width='15'
              height='15'
            >
              <path
                d='M523.1 959.4c-8.2 0-16-3.4-21.5-9.5l-483.3-528c-7.8-8.5-9.8-20.9-5.2-31.5 4.7-10.6 15.1-17.4 26.7-17.4h944.4c11.5 0 22 6.8 26.6 17.3 4.7 10.5 2.8 22.8-4.9 31.4L544.8 949.8c-5.5 6.1-13.3 9.6-21.6 9.7 0-0.1 0-0.1-0.1-0.1z m-417-528l416.8 455.5 395.9-455.5H106.1z'
                fill='#666666'
                p-id='5235'
              ></path>
              <path
                d='M39.8 433.1c-7.3 0-14.6-2.7-20.3-8.2-11.6-11.2-11.8-29.7-0.6-41.3l246.2-253.7c5.5-5.7 13-8.9 20.9-8.9h480.5c8.2 0 16 3.4 21.5 9.5l217.7 252c10.9 11.9 10.1 30.3-1.8 41.2-11.9 10.9-30.4 10-41.2-1.8L753.6 179.4H298.3L60.7 424.2c-5.7 5.9-13.3 8.9-20.9 8.9z'
                fill='#666666'
                p-id='5236'
              ></path>
              <path
                d='M523.1 959.4c-11.5 0-21.9-6.8-26.6-17.2l-239.1-529c-6.6-14.7-0.1-32 14.6-38.6 14.6-6.6 31.9-0.1 38.6 14.6L523.4 860 740 390c6.7-14.6 24.1-21 38.7-14.3s21 24.1 14.3 38.7L549.6 942.5c-4.8 10.3-15.1 16.9-26.5 16.9z'
                fill='#666666'
                p-id='5237'
              ></path>
              <path
                d='M286.2 431.4c-16.1 0-29.2-13.1-29.2-29.2V148.6c0-16.1 13.1-29.2 29.2-29.2s29.2 13.1 29.2 29.2v253.6c-0.1 16.1-13.1 29.2-29.2 29.2zM766.4 431.4c-16.1 0-29.2-13.1-29.2-29.2V148.6c0-16.1 13.1-29.2 29.2-29.2s29.2 13.1 29.2 29.2v253.6c0 16.1-13 29.2-29.2 29.2z'
                fill='#666666'
                p-id='5238'
              ></path>
              <path
                d='M770.6 430.3c-7.6 0-15.1-2.9-20.8-8.7l-222.5-227-222.5 227c-11.3 11.5-29.7 11.7-41.3 0.4-11.5-11.3-11.7-29.8-0.4-41.3l243.3-248.2c11-11.2 30.7-11.2 41.7 0l243.3 248.2c11.3 11.5 11.1 30-0.4 41.3-5.7 5.5-13 8.3-20.4 8.3z'
                fill='#666666'
                p-id='5239'
              ></path>
            </svg>
            &nbsp;精华帖
          </span>
          <span>
            <svg
              t='1681624980298'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='6417'
              width='15'
              height='15'
            >
              <path
                d='M541.257143 801.645714c-166.765714 0-298.422857-134.582857-298.422857-298.422857C242.834286 336.457143 377.417143 204.8 541.257143 204.8c166.765714 0 298.422857 134.582857 298.422857 298.422857 0 166.765714-131.657143 298.422857-298.422857 298.422857z m0-550.034285c-140.434286 0-251.611429 114.102857-251.611429 251.611428 0 140.434286 114.102857 251.611429 251.611429 251.611429s251.611429-114.102857 251.611428-251.611429c2.925714-140.434286-111.177143-251.611429-251.611428-251.611428z'
                fill='#3271B0'
                p-id='6418'
              ></path>
              <path
                d='M196.022857 731.428571c-46.811429 0-87.771429-11.702857-102.4-43.885714-35.108571-70.217143 87.771429-166.765714 163.84-216.502857l26.331429 38.034286c-122.88 81.92-155.062857 143.36-146.285715 160.914285 8.777143 17.554286 64.365714 29.257143 187.245715-2.925714 73.142857-17.554286 157.988571-49.737143 239.908571-87.771428 90.697143-43.885714 172.617143-90.697143 236.982857-137.508572 90.697143-70.217143 114.102857-117.028571 108.251429-131.657143-8.777143-17.554286-67.291429-29.257143-198.948572 5.851429l-11.702857-43.885714c99.474286-26.331429 225.28-43.885714 251.611429 20.48 26.331429 58.514286-52.662857 134.582857-122.88 187.245714-67.291429 49.737143-149.211429 99.474286-242.834286 143.36-84.845714 40.96-172.617143 73.142857-248.685714 90.697143-46.811429 8.777143-96.548571 17.554286-140.434286 17.554285z'
                fill='#3271B0'
                p-id='6419'
              ></path>
            </svg>
            个人成长
            <svg
              t='1681625024965'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='7370'
              width='15'
              height='15'
            >
              <path
                d='M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z'
                fill='#3D3D3D'
                p-id='7371'
              ></path>
            </svg>
          </span>
        </div>
        <div className='item-content-functionList'>
          <svg
            t='1681625224308'
            class='icon'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='8349'
            width='15'
            height='15'
          >
            <path
              d='M1011.558951 1024H11.878951a9.142857 9.142857 0 0 1-9.142857-9.142857V14.445714a9.142857 9.142857 0 0 1 9.142857-9.142857h364.251429a9.325714 9.325714 0 0 1 9.142857 9.142857 9.142857 9.142857 0 0 1-9.142857 9.142857H21.021809V1005.714286h981.394285V692.845714a9.325714 9.325714 0 0 1 9.142857-9.142857 9.142857 9.142857 0 0 1 9.142858 9.142857v321.462857a9.142857 9.142857 0 0 1-9.142858 9.691429z'
              fill='black'
              p-id='8350'
            ></path>
            <path
              d='M281.776094 743.497143a8.594286 8.594286 0 0 1-6.4-2.742857 9.142857 9.142857 0 0 1 0-12.982857L996.747523 6.217143a9.325714 9.325714 0 0 1 12.982857 0 9.142857 9.142857 0 0 1 0 12.982857L288.176094 740.754286a8.96 8.96 0 0 1-6.4 2.742857z'
              fill='black'
              p-id='8351'
            ></path>
            <path
              d='M1009.913237 561.005714a9.142857 9.142857 0 0 1-9.142857-9.142857V18.285714H502.85038a9.142857 9.142857 0 0 1-9.142857-9.142857 9.142857 9.142857 0 0 1 9.142857-9.142857h507.062857a9.142857 9.142857 0 0 1 9.142857 9.142857v542.72a9.142857 9.142857 0 0 1-9.142857 9.142857z'
              fill='black'
              p-id='8352'
            ></path>
          </svg>

          <span>
            <svg
              t='1681625449805'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='9248'
              width='15'
              height='15'
            >
              <path
                d='M908.732232 94.922906l-762.424516 0c-36.913724 0-66.947761 30.034037-66.947761 66.947761l0 482.31798c0 36.919864 30.034037 66.947761 66.947761 66.947761l132.198881 0c21.472034 0 38.937824 17.464767 38.937824 38.938847l0 145.57554 204.329688-175.143972c7.046486-6.036483 16.029068-9.367345 25.331945-9.367345l361.627201 0c36.912701 0 66.946738-30.02892 66.946738-66.948785L975.679993 161.870668C975.67897 124.957966 945.644933 94.922906 908.732232 94.922906zM947.670056 644.188648c0 21.472034-17.46579 38.946011-38.937824 38.946011L547.105031 683.134659c-15.97381 0-31.455409 5.717212-43.560098 16.118096l-158.090575 135.487787L345.454358 750.07321c0-36.905538-30.034037-66.940598-66.947761-66.940598L146.307715 683.132612c-21.472034 0-38.938847-17.47193-38.938847-38.946011L107.368868 161.870668c0-21.479197 17.464767-38.944987 38.938847-38.944987l762.424516 0c21.469987 0 38.937824 17.464767 38.937824 38.944987L947.670056 644.188648 947.670056 644.188648z'
                p-id='9249'
              ></path>
            </svg>
            &nbsp;453
          </span>

          <span>
            <svg
              t='1681625511525'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='11127'
              width='15'
              height='15'
            >
              <path
                d='M512 901.747c-13.584 0-26.122-4.18-37.094-13.061-8.882-7.315-225.698-175.02-312.424-311.38-28.735-44.93-68.441-106.057-68.441-192.784 0-144.718 108.147-262.269 240.326-262.269 67.396 0 131.657 30.825 177.633 84.637 45.453-54.335 109.192-84.637 177.11-84.637 132.702 0 240.327 117.551 240.327 262.27 0 85.159-37.094 143.673-67.396 191.216l-1.045 1.567c-86.727 136.36-303.543 304.588-312.425 311.38-10.449 8.359-22.987 13.06-36.571 13.06zM334.367 164.049c-109.714 0-198.53 98.743-198.53 220.473 0 74.188 33.959 127.478 61.649 170.319 83.07 130.09 294.138 294.139 303.02 300.93 3.657 2.613 7.314 4.18 11.494 4.18s7.837-1.567 11.494-4.18c8.882-6.791 219.95-170.84 303.02-300.93l1.045-1.568c28.212-44.93 60.604-95.608 60.604-168.75 0-121.209-89.339-220.474-198.53-220.474-60.082 0-115.984 29.257-153.6 80.98l-6.27 8.881c-4.18 5.225-10.449 8.36-16.718 8.36s-13.061-3.135-16.718-8.36l-6.27-8.881c-39.706-51.2-96.13-80.98-155.69-80.98z'
                p-id='11128'
              ></path>
            </svg>
            &nbsp;999+
          </span>
        </div>
      </div>
      <div className='item-comment'>
        <div className='item-head'>
          <div className='item-head-img'></div>
          <div className='item-head-name'>老陈&nbsp;评论</div>
          <div className='item-head-load'>
            <svg
              t='1681625511525'
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='11127'
              fill='red'
              width='15'
              height='15'
            >
              <path
                d='M512 901.747c-13.584 0-26.122-4.18-37.094-13.061-8.882-7.315-225.698-175.02-312.424-311.38-28.735-44.93-68.441-106.057-68.441-192.784 0-144.718 108.147-262.269 240.326-262.269 67.396 0 131.657 30.825 177.633 84.637 45.453-54.335 109.192-84.637 177.11-84.637 132.702 0 240.327 117.551 240.327 262.27 0 85.159-37.094 143.673-67.396 191.216l-1.045 1.567c-86.727 136.36-303.543 304.588-312.425 311.38-10.449 8.359-22.987 13.06-36.571 13.06zM334.367 164.049c-109.714 0-198.53 98.743-198.53 220.473 0 74.188 33.959 127.478 61.649 170.319 83.07 130.09 294.138 294.139 303.02 300.93 3.657 2.613 7.314 4.18 11.494 4.18s7.837-1.567 11.494-4.18c8.882-6.791 219.95-170.84 303.02-300.93l1.045-1.568c28.212-44.93 60.604-95.608 60.604-168.75 0-121.209-89.339-220.474-198.53-220.474-60.082 0-115.984 29.257-153.6 80.98l-6.27 8.881c-4.18 5.225-10.449 8.36-16.718 8.36s-13.061-3.135-16.718-8.36l-6.27-8.881c-39.706-51.2-96.13-80.98-155.69-80.98z'
                p-id='11128'
              ></path>
            </svg>
            &nbsp;245
          </div>
        </div>
        <TextContainer text={text} maxChars={50} />
      </div>
    </div>
  )
}