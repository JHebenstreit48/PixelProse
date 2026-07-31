import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const QtFramework = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/QtFramework';

  return (
    <>
      <PageLayout>
        <PageTitle title="Qt Framework" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QtFramework;
