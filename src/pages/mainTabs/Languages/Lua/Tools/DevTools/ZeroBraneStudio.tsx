import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
