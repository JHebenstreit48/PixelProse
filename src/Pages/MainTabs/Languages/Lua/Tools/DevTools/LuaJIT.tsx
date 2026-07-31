import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LuaJIT = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/LuaJIT';

  return (
    <>
      <PageLayout>
        <PageTitle title="LuaJIT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LuaJIT;
