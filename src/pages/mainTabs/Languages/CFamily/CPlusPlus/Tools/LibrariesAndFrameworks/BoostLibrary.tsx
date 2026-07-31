import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
