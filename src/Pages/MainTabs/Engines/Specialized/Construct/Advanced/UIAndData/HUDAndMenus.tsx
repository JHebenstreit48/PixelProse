import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HUDAndMenus = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/UIAndData/HUDAndMenus';

  return (
    <>
      <PageLayout>
        <PageTitle title="HUD & Menus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HUDAndMenus;
