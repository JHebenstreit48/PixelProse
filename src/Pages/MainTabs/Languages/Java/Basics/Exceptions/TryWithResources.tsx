import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TryWithResources = () => {
  const markdownFilePath = 'Languages/Java/Basics/Exceptions/TryWithResources';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Try-with-Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TryWithResources;
