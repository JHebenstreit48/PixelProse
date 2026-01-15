import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LuaJIT = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/LuaJIT';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="LuaJIT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LuaJIT;
