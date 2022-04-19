import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

function RenderLeader({ leaders, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else if (leaders != null) {
        return (
            <div key={leaders.id} className="col-12 mt-5">
                <Fade in>
                    <Media tag="li">
                        <Media left middle>
                            <Media object height="auto" width="150" src={baseUrl + leaders.image} alt={leaders.name} />
                        </Media>
                        <Media body className="ml-3">
                            <Media heading>{leaders.name}</Media>
                            <p>{leaders.designation}</p>
                            <p>{leaders.description}</p>
                        </Media>
                    </Media>
                </Fade>
            </div>
        );
    } else {
        return (<div></div>)
    }
}

function About(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
                <div className="col-12 m-1" key={leader.id}>
                    <RenderLeader leaders={leader} />
                </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2014, Driven By Fury quickly established itself as a car enthusiast icon par excellence in New York City. With its unique brand of automotive magazine that can be found nowhere else, it enjoys patronage from the A-list clientele linked to our instagram community.</p>
                    <p>The company traces its humble beginnings to <em>The Luxury Lifestyle magazine</em>, a successful chain started by our friend, Mr. Michael Louis, that featured for the first time the world's best luxury magazine online.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">14 Nov. 2014</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Viktor Khachatryan</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$15500</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">1</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <Stagger in>
                            {leaders}
                        </Stagger>    
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;  