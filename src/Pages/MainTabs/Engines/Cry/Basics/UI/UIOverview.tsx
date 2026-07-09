import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
