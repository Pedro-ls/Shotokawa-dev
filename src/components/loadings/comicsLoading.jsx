import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import IconImage from '../../assets/icon.png';
import { styled } from 'styled-components';
export function ComicLoading() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                margin: 0,
                padding: 0,
                lineHeight: '40px',
                marginBlock: '12px',
            }}
        >
            <Skeleton
                height={27}
                width={140}
                style={{
                    marginLeft: '21px',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                    justifyContent: 'space-around',
                }}
            >
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
            </div>
            <Skeleton
                height={27}
                width={140}
                style={{
                    marginLeft: '21px',
                }}
            />
            <div
                style={{
                    display: 'flex',

                    justifyContent: 'space-around',
                }}
            >
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '90px',
                        height: '140px',
                    }}
                />
            </div>
        </div>
    );
}

export function HomeLoading() {
    const LoadingImg = styled.img`
        width: 100px;
        height: 100px;
        animation: loading infinite 3s;
        transition: ease-in-out 2s;

        @keyframes loading {
            0% {
                transform: scale(1);
                border-radius: 10%;
                transform: rotate(20deg);
                border: 14px solid #ee7825;
            }
            20% {
                transform: scale(1.3);
                border-radius: 26%;
                transform: rotate(0deg);
                background-color: transparent;
                border: 17px solid #ee7825;
            }
            40% {
                transform: scale(1);
                border-radius: 10%;
                transform: rotate(-20deg);
                border: 14px solid #ee7825;
            }
            80% {
                transform: scale(1.6);
                border-radius: 26%;
                transform: rotate(0deg);
                border: 17px solid #ee7825;
            }
            100% {
                transform: scale(1);
                border-radius: 10%;
                transform: rotate(20deg);
                border: 14px solid #ee7825;
            }
        }
    `;
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                }}
            >
                <LoadingImg src={IconImage} alt="Loading..." />
            </div>
        </>
    );
}

export function ReadingLoading() {
    return (
        <>
            <div
                style={{
                    marginTop: '53px',
                    marginLeft: '46px',
                    lineHeight: '66px',
                }}
            >
                <Skeleton width={600} height={340} />
                <Skeleton width={600} height={340} />
                <Skeleton width={600} height={340} />
                <Skeleton width={600} height={340} />
                <Skeleton width={600} height={340} />
            </div>
        </>
    );
}

export function EpisodesLoading() {
    return (
        <div
            style={{
                width: '130px',
                height: '100vh',
                padding: '15px',
                backgroundColor: '#000000',
                boxShadow: '-10px 0px 7px rgba(0, 0, 0, 0.9)',
                color: '#ffffff',
                position: 'fixed',
                top: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '42px',
            }}
        >
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
            <Skeleton width={190} height={28} />
        </div>
    );
}

export function ProfileComicLoading() {
    return (
        <>
            <>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        maxWidth: '100%',
                    }}
                >
                    <div>
                        <Skeleton
                            width={420}
                            height={420}
                            style={{
                                marginLeft: '66px',
                                marginTop: '24px',
                            }}
                        />
                        <div
                            style={{
                                marginLeft: '66px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                paddingInline: '26px',
                            }}
                        >
                            <Skeleton
                                style={{ marginTop: '24px' }}
                                width={120}
                                height={40}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    gap: '20px',
                                }}
                            >
                                <Skeleton
                                    style={{ marginTop: '24px' }}
                                    width={40}
                                    height={40}
                                    circle={true}
                                />
                                <Skeleton
                                    style={{ marginTop: '24px' }}
                                    width={40}
                                    height={40}
                                    circle={true}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: '66px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Skeleton
                                style={{ marginTop: '34px' }}
                                width={346}
                                height={49}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: '24px',
                            width: '100%',
                            marginLeft: '28px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',

                                justifyContent: 'left',
                                marginBottom: '3px',
                            }}
                        >
                            <Skeleton
                                style={{
                                    marginInline: '3px',
                                }}
                                width={120}
                                height={40}
                            />
                            <Skeleton
                                style={{
                                    marginInline: '3px',
                                }}
                                width={120}
                                height={40}
                            />
                            <Skeleton
                                style={{
                                    marginInline: '3px',
                                }}
                                width={120}
                                height={40}
                            />
                        </div>
                        <div
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                            <Skeleton height={60} />
                        </div>
                    </div>
                    <div
                        style={{
                            marginRight: '20px',
                        }}
                    >
                        <Skeleton
                            width={126}
                            height={180}
                            style={{
                                marginLeft: '66px',
                                marginTop: '24px',
                            }}
                        />
                        <Skeleton
                            width={126}
                            height={180}
                            style={{
                                marginLeft: '66px',
                                marginTop: '24px',
                            }}
                        />

                        <Skeleton
                            width={126}
                            height={180}
                            style={{
                                marginLeft: '66px',
                                marginTop: '24px',
                            }}
                        />
                    </div>
                </div>
            </>
        </>
    );
}

export function TitleLoading() {}

export function SliderLoading() {
    return (
        <>
            <div
                style={{
                    marginTop: '53px',
                    marginLeft: '46px',
                    lineHeight: '66px',
                }}
            >
                <Skeleton width={120} height={59} />
                <Skeleton width={340} height={100} />
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <Skeleton
                        style={{
                            width: '120px',
                            height: '44px',
                            margin: '1px 3px',
                        }}
                    />
                    <Skeleton
                        style={{
                            width: '120px',
                            height: '44px',
                            margin: '1px 3px',
                        }}
                    />
                </div>
            </div>
            <div>
                <Skeleton
                    style={{
                        width: '178px',
                        height: '94px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '178px',
                        height: '94px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '178px',
                        height: '94px',
                    }}
                />
                <Skeleton
                    style={{
                        width: '178px',
                        height: '94px',
                    }}
                />
            </div>
        </>
    );
}
