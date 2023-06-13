// src/components/pages/MainPage.tsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface SectionProps {
    backgroundcolor: string;
    height?: string;
    color?: string;
}


const HomeSection = styled(Box)<SectionProps>(({ theme, backgroundcolor, height, color }) => ({
    padding: '40px 0',
    backgroundColor: backgroundcolor,
    height: height || 'auto',
    display: 'flex',
    color: color,
}));

const HomeSectionContainer = styled(Container)({
    maxWidth: '1240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
});

const MainPage: React.FC = () => {
    return (
        <div>
            <HomeSection backgroundcolor="#1e2537" height="400px" color="white">
                <HomeSectionContainer>
                    <Typography variant="h2" align="left" fontWeight='bold'>
                        농산커
                    </Typography>
                    <Typography variant="body1" align="left">
                        농산물 가격검색과 쇼핑몰과 커뮤니티 사이트에 오신 것을 환영합니다. 우리는 농산물 가격을 검색하고,
                        다양한 상품을 쇼핑하며, 커뮤니티에서 정보를 공유할 수 있는 플랫폼입니다. 농산물 시세, 다양한 상품,
                        인기 글 등 다양한 정보와 서비스를 제공하고 있습니다. 함께 편리하고 유익한 농산물 커뮤니티를 즐겨보세요.
                    </Typography>
                </HomeSectionContainer>
            </HomeSection>
            <HomeSection backgroundcolor="#1180ff" color="white">
                <HomeSectionContainer>
                    <Typography variant="h2" align="left" fontWeight='bold'>
                        농산물 시세
                    </Typography>
                    <Typography variant="body1" align="left">
                        농산물 시세 페이지에서는 다양한 농산물의 시세 정보를 확인할 수 있습니다. 실시간으로 업데이트되는
                        가격 정보를 통해 농산물의 시장 동향을 파악하고, 효율적인 구매 및 판매를 할 수 있습니다. 농산물 시세
                        페이지에서 최신 가격 정보를 확인해보세요.
                    </Typography>
                </HomeSectionContainer>
            </HomeSection>
            <HomeSection backgroundcolor="#6730ec" height="600px" color="white">
                <HomeSectionContainer>
                    <Typography variant="h2" align="left" fontWeight='bold'>
                        농산물 상품
                    </Typography>
                    <Typography variant="body1" align="left">
                        농산물 상품 페이지에서는 다양한 농산물 상품을 구매할 수 있습니다. 신선한 농산물과 가공품, 재배용품 등
                        다양한 상품을 제공하고 있습니다. 고품질의 농산물을 저렴한 가격에 구매하여 건강하고 맛있는 식사를 즐겨보세요.
                    </Typography>
                </HomeSectionContainer>
            </HomeSection>
            <HomeSection backgroundcolor="#f9f9f9" height="500px">
                <HomeSectionContainer>
                    <Typography variant="h2" align="left" fontWeight='bold'>
                        인기 글
                    </Typography>
                    <Typography variant="body1" align="left">
                        인기 글 페이지에서는 다양한 주제의 인기 게시물을 확인할 수 있습니다. 농산물 관련 정보, 레시피, 재배 팁 등
                        다양한 내용을 공유하고 소통할 수 있는 커뮤니티입니다. 인기 글을 통해 유익한 정보를 얻고, 다른 회원들과
                        의견을 공유해보세요.
                    </Typography>
                </HomeSectionContainer>
            </HomeSection>
        </div>
    );
};

export default MainPage;
