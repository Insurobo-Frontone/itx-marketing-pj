import React from 'react';
import PersonalBanner from '../components/Personal/PersonalBanner';
import PersonalBody from '../components/Personal/PersonalBody';
import Layout from '../Layouts/Layout';

const Personal = () => {
    return(<>
        <Layout>
            <PersonalBanner/>
            <PersonalBody/>
        </Layout>
    </>)

}

export default Personal
