import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
