import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const UIOverview = () => {
  const markdownFilePath = 'Engines/Cry/Basics/UI/UIOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="UI Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIOverview;
