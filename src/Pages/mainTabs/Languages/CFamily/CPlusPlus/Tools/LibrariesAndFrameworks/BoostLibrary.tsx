import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BoostLibrary = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/BoostLibrary';

  return (
    <>
      <PageLayout>
        <PageTitle title="Boost Library" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BoostLibrary;
