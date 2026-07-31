import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ZeroBraneStudio = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/ZeroBraneStudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="ZeroBrane Studio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZeroBraneStudio;
