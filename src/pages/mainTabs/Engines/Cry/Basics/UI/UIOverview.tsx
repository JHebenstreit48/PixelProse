import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
