import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import TagIcon from '@mui/icons-material/Tag';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import center_columns from './admin_columns'

let primary_color = "#E6B751"
let admin_settings = {
    "admin_menu": [
        {
            "title": "Main pages",
            "links_list": [
                    {
                        "name": "Centers",
                        "url": "/admin/centers",
                        "icon": <ApartmentIcon sx={{color: primary_color}}/>,
                        "columns": center_columns,
                    },
                    {
                        "name": "Articles in Blog",
                        "url": "/admin/blog",
                        "icon": <ArticleIcon sx={{color: primary_color}}/>,
                        "columns": center_columns,

                    }
                ]
        },
        {
            "title": "Relations",
            "links_list": [
                    {
                        "name": "Tags in Centers",
                        "url": "/admin/tags",
                        "icon": <TagIcon sx={{color: primary_color}}/>
                    }
                ],
        },
        {
            "title": "Actions",
            "links_list": [
                {
                    "name": "Administrators",
                    "url": "/admin/administrators",
                    "icon": <SupervisorAccountIcon sx={{color: primary_color}}/>
                },
                {
                    "name": "Logout",
                    "url": "/admin/logout",
                    "icon": <LogoutIcon sx={{color: primary_color}}/>
                }
            ]
        }
        ]
}

export default admin_settings;