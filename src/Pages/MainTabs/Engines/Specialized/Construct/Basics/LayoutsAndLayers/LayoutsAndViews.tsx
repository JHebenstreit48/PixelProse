import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayoutsAndViews = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/LayoutsAndLayers/LayoutsAndViews';

  return (
    <>
      <PageLayout>
        <PageTitle title="Layouts & Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayoutsAndViews;
