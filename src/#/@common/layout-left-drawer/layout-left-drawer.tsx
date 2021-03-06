import React, { useCallback } from 'react';
import { match as MatchType, Route, RouteComponentProps } from 'react-router-dom';

import cn from 'classnames';

import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Theme, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExtensionIcon from '@material-ui/icons/Extension';
import LabelIcon from '@material-ui/icons/Label';
import LaptopIcon from '@material-ui/icons/Laptop';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

import TooltipBig from '@components/tooltip-big';

import { LinkButton } from '#/@common/link-button';
import { isSuperAdmin } from '#/@store/roles';
import { ROUTE } from '#/@store/router';

import { useStyles } from './styles';

import { IProject, IRoute } from '@types';

export interface ILayoutLeftDrawerProps {
  children?: React.ReactNode;
  goTo: any;
  isLeftBarOpen: boolean;
  isTasksLoading: boolean;
  isWidthSm: boolean;
  match: MatchType<any>;
  routes?: IRoute[];
  openedProject?: IProject;
  refreshProjectTasks: any;
  showFooter?: boolean;
  theme: Theme;
  toggleUiSetting: any;
}

export const ICONS_MAP = {
  [ROUTE.PROJECT.TASKS()]: ExtensionIcon,
  [ROUTE.PROJECT.MEMBERS()]: PeopleOutlineIcon,
  [ROUTE.PROJECT.PARTS()]: LabelIcon,
  [ROUTE.PROJECT.ROLES()]: PeopleOutlinedIcon,
  [ROUTE.PROJECT.SETTINGS()]: SettingsIcon,
  [ROUTE.PROJECT.STATUS_MOVES()]: SyncAltIcon,
};

export const LayoutLeftDrawerTsx: React.FC<ILayoutLeftDrawerProps & RouteComponentProps<any>> = ({
  children,
  goTo,
  isLeftBarOpen,
  isTasksLoading,
  isWidthSm,
  match,
  routes,
  openedProject: project,
  refreshProjectTasks,
  showFooter,
  toggleUiSetting,
}) => {
  const classes = useStyles();

  const handleDrawerToggle = useCallback(() => {
    toggleUiSetting('isLeftBarOpen');
  }, [toggleUiSetting]);

  const goToPage = useCallback(
    (path?: string) => () => {
      if (path) {
        if (isWidthSm) {
          handleDrawerToggle();
        }
        goTo(path.replace(match.path, match.url));
      }
    },
    [handleDrawerToggle, goTo, match, isWidthSm]
  );

  const theme = useTheme();

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isLeftBarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {project && project.id && project.title && (
            <LinkButton to={`/projects/${project.id}`} className={classes.projectTitle}>
              {project.title}
            </LinkButton>
          )}
          {project && project.pub && project.title && (
            <LinkButton
              to={ROUTE.PUBLIC.ONE(project?.pub?.uuid || project.uuid)}
              color="primary"
              variant="contained"
              className={classes.projectPublic}
            >
              Публичный
            </LinkButton>
          )}
          <div className={classes.grow} />
          {project && project.id && (
            <Route path={ROUTE.PROJECT.TASKS(project.id)} exact>
              <Tooltip title="Обновить задачи проекта">
                <IconButton className={classes.refreshBtn} onClick={refreshProjectTasks}>
                  <RefreshIcon className={cn({ [classes.refreshIcon]: isTasksLoading })} />
                </IconButton>
              </Tooltip>
            </Route>
          )}
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {routes && routes.length && (
          <List>
            {routes
              .filter((el: any) => el.title)
              .map((route: IRoute) => {
                const CurIcon = ICONS_MAP[route.path] || ICONS_MAP[ROUTE.PROJECT.TASKS()];
                return (
                  <ListItem key={route.path} button onClick={goToPage(route.path)}>
                    <ListItemIcon>{route.icon || <CurIcon />}</ListItemIcon>
                    <ListItemText primary={route.title} />
                    {isSuperAdmin(route.access) && (
                      <TooltipBig title={'Недоступно для пользователей!'}>
                        <div className={classes.isSuperAdminStyle} />
                      </TooltipBig>
                    )}
                  </ListItem>
                );
              })}
          </List>
        )}
        {showFooter && (
          <>
            <Divider />
            <List>
              <ListItem button onClick={goToPage(ROUTE.PROFILE)}>
                <ListItemIcon>
                  <LaptopIcon />
                </ListItemIcon>
                <ListItemText primary={'Мои Проекты'} />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
      <ButtonBase onClick={handleDrawerToggle} className={classes.toggleButton}>
        <ChevronRightIcon />
      </ButtonBase>
      <section
        className={cn(classes.content, {
          [classes.contentShift]: isLeftBarOpen,
        })}
      >
        {children}
      </section>
    </>
  );
};
