import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BoostLibrary = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/BoostLibrary';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Boost Library" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BoostLibrary;
