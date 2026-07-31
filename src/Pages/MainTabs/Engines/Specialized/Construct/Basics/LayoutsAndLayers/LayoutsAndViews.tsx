import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
