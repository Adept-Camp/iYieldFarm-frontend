import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
// import {
//   Link
// } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import { colors } from '../../theme'

import Store from "../../stores";
const store = Store.store

const styles = theme => ({
  root: {
    // position: 'absolute',
    // top: '0px',
    width: '100%',
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  footer: {
    padding: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    }
  },
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerText: {
    cursor: 'pointer',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  languageContainer: {
    paddingLeft: '12px',
    display: 'none'
  },
  selectInput: {
    fontSize: '14px',
    color: colors.pink
  },
  link: {
    textDecoration: 'none'
  }
});

class Footer extends Component {

  constructor(props) {
    super()

    const rewardPools = store.getStore('rewardPools')

    this.state = {
      rewardPools: rewardPools,
      languages: store.getStore('languages'),
      language: 'en',
      open: true
    }
  }

  closeAlert = () => {
    this.setState({open: false})
  }

  renderRewards = () => {
    const { rewardPools } = this.state

    return rewardPools.map((rewardPool, index) => {
      return this.renderRewardPool(rewardPool, index)
    })
  }

  renderRewardPool = (rewardPool, index) => {

    const { classes, t } = this.props
    console.log(rewardPool)
 
  }

  render() {
    const { classes, t, location } = this.props;
    const { open } = this.state

    return (
      <div className={classes.root}>
        <div className={classes.footer}>
          <div className={classes.footerLinks}>
              <Typography className={ classes.footerText } variant='h6'>
                
				<img src="https://iyf.finance/apple-icon-180x180.png" width="64" height="64" />
				<Link href="/">{t('Footer.Home')}</Link>
				<Link href="https://uniswap.info/pair/0x3845a342a030ca67bd16ddf739b1a67fe5b3f8f9">{t('Footer.Trade')}</Link>
				<Link href="https://t.me/iYieldFarm">{t('Footer.Telegram')}</Link>
				<Link href="https://discord.gg/3qFCWt3">{t('Footer.Discord')}</Link>
				<Link href="https://twitter.com/iYieldFarm">{t('Footer.Twitter')}</Link>
				<Link href="http://github.com/iYieldFarm">{t('Footer.Github')}</Link>
				<Link href="http://medium.com/@iYieldFarm">{t('Footer.Medium')}</Link>
				<Link href="https://faq.iyf.finance/">{t('Footer.FAQ')}</Link>
				<Link href="https://yield.iyf.finance/iyf/iyf_dai/">{t('Footer.Yield')}</Link>
                {this.renderRewards()}
              </Typography>
          </div>
        </div>
    </div>
    )
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Footer)));
