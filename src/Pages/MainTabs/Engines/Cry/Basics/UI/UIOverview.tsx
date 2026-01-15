import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UIOverview = () => {
  const markdownFilePath = 'Engines/Cry/Basics/UI/UIOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="UI Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIOverview;
