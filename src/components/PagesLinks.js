import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './PagesLinks.module.css';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

const links = [
	{
		id: 1,
		path: '/',
		text: 'Main',
	},
	{
		id: 2,
		path: '/login',
	},
	{
		id: 4,
		path: '/one',
		text: 'One',
	},
	{
		id: 5,
		path: '/two',
		text: 'Two',
	},
	{
		id: 6,
		path: '/three',
		text: 'Three',
	},
];

export default function PagesLinks(props) {
	const classes = useStyles();
	return (
		<>
			<Toolbar className={classes.toolbar}>
				<Button size='small' key={(links.id = 4)}>
					<NavLink className='links' to={(links.path = '/one')} exact>
						{(links.text = 'One')}
					</NavLink>
				</Button>
				<Button size='small' key={(links.id = 5)}>
					<NavLink className='links' to={(links.path = '/two')} exact>
						{(links.text = 'Two')}
					</NavLink>
				</Button>
				<Button size='small' key={(links.id = 6)}>
					<NavLink
						className='links'
						to={(links.path = '/three')}
						exact
					>
						{(links.text = 'Three')}
					</NavLink>
				</Button>
				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					className={classes.toolbarTitle}
					key={(links.id = 1)}
				>
					<NavLink className='links' to={(links.path = '/')} exact>
						{(links.text = 'Sitename')}
					</NavLink>
				</Typography>
				<nav className={style.nav}>
					<ul>
						{props.isLoggedIn && (
							<li>
								<a href='/'>Users</a>
							</li>
						)}
						{props.isLoggedIn && (
							<li>
								<a href='/'>Admin</a>
							</li>
						)}
						{props.isLoggedIn && (
							<li>
								<button onClick={props.onLogout}>Logout</button>
							</li>
						)}
					</ul>
				</nav>
				<Button variant='outlined' size='small' key={(links.id = 2)}>
					<NavLink
						className='links'
						to={(links.path = '/login')}
						exact
					>
						Sign up
					</NavLink>
				</Button>
			</Toolbar>
		</>
	);
}
