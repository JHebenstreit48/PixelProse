import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
