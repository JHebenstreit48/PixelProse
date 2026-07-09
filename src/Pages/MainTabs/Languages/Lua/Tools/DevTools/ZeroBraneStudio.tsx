import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
