import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QtFramework = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/QtFramework';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Qt Framework" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QtFramework;
