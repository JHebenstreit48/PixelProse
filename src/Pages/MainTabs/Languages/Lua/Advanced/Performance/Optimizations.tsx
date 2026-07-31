import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Optimizations = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Performance/Optimizations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimizations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimizations;
